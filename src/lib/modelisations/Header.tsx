class Header {

    public id: string;
    public label: string;
    public type: string;

    constructor(id: string, label: string, type: string) {
        this.id = id;
        this.label = label;
        this.type = type;
    }
}

const verifierModeleHeader = (objet: any): boolean => {
    // Vérifiez si l'objet est défini
    if (typeof objet !== 'object' || objet === null) {
        return false;
    }

    // Vérifiez si les propriétés id et label sont présentes et sont de type string
    if (typeof objet.id !== 'string' || typeof objet.label !== 'string' || typeof objet.type !== 'string') {
        return false;
    }

    // Si toutes les vérifications passent, l'objet est considéré comme correctement modélisé
    return true;
};

const verifierModeleHeaderArray = (array: any[]): boolean => {
    // Vérifiez si l'argument est un tableau
    if (!Array.isArray(array)) {
        return false;
    }

    // Vérifiez si chaque élément du tableau est correctement modélisé
    for (const element of array) {
        if (!verifierModeleHeader(element)) {
            return false;
        }
    }

    // Si toutes les vérifications passent pour chaque élément, le tableau est considéré comme correctement modélisé
    return true;
};

export default Header;
export { verifierModeleHeaderArray, verifierModeleHeader };