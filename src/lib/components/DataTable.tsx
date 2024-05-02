import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import '../css/index.css';
import Table from './Table';
import Header, { verifierModeleHeaderArray } from '../modelisations/Header';
import { generateStore } from '../store';
import { ThemeProvider } from 'styled-components';

function expandColor(shortHexColor: string): string {
    // Vérifier si la couleur est au format court (#RGB)
    if (shortHexColor.length === 4) {
        // Élargir chaque caractère
        const expandedHexColor = `#${shortHexColor[1]}${shortHexColor[1]}${shortHexColor[2]}${shortHexColor[2]}${shortHexColor[3]}${shortHexColor[3]}`;
        return expandedHexColor;
    } else {
        // Retourner la couleur telle quelle si elle est déjà au format long
        return shortHexColor;
    }
}

function reduceColor(hexColor: string, reduction: number) {
    // Convertir la couleur hexadécimale en valeurs RGB
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    // Réduire chaque composante RGB
    const newR = Math.max(0, r - reduction);
    const newG = Math.max(0, g - reduction);
    const newB = Math.max(0, b - reduction);

    // Convertir les nouvelles valeurs RGB en hexadécimal
    const newHexColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

    return newHexColor;
}

function estCouleurClaire(couleur: string) {
    // Convertir la couleur en RGB
    var r, g, b;
    couleur = couleur.substr(1);
    r = parseInt(couleur.substr(0, 2), 16);
    g = parseInt(couleur.substr(2, 2), 16);
    b = parseInt(couleur.substr(4, 2), 16);

    // Calculer la luminosité
    var luminosite = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

    // Retourner true si la luminosité est élevée (couleur claire)
    return luminosite > 128;
}

interface DataTableProps {
    enableSearch?: boolean;
    enablePagination?: boolean;
    data?: Array<any>;
    apiData?: string | null;
    border?: string|null;
    color?: string|null;
    // header: Array<{ id: string; label: string; type: string }>;
    header: Header[];
}

const DataTable: React.FC<DataTableProps> = ({ data = null, apiData = null, header, enableSearch = false, enablePagination = false, border = null, color = null }) => {

    const [valideParam, setValideParam] = useState<boolean>(false);

    useEffect(() => {
        if (verifierModeleHeaderArray(header)) {
            setValideParam(true);
        } else {
            setValideParam(false);
            console.error('Error: header invalide');
        }
    }, [header]);

    let COLORS;
    if(color !== null){
        const longColor: string = expandColor(color);
        const textColor = estCouleurClaire(color) ? '#000' : '#fff';
        const colorHeader = longColor;
        const reductionValue = 17;
        const colorTr = reduceColor(colorHeader, reductionValue);
        const colorTh = reduceColor(colorTr, reductionValue);

        COLORS = {
            color: textColor,
            colorHeader: colorTh,
            colorTh: colorTr,
            colorTr: colorHeader,
        };
    }else{
        // default
        COLORS = {
            colorHeader: '#fff',
            colorTh: '#fff',
            colorTr: '#fff',
            border: '1px solid black'
        };
    }
    
    const storeInstance = generateStore();

    return (
        <Provider store={storeInstance}>
            <ThemeProvider theme={{ colors: COLORS }}>
                {valideParam ? <Table data={data} apiData={apiData} header={header} enableSearch={enableSearch} enablePagination={enablePagination} border={border} color={color} ></Table> : null}
                {/* <Table data={data} header={header} enableSearch={enableSearch} ></Table> */}
            </ThemeProvider>
        </Provider>
    )
};

export default DataTable;