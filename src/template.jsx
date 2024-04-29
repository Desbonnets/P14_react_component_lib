const html = (
    <div>
        <div id="tableOptionsTop" className="tableOptionsaz">
            <div>
                <select>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div>
                <input className="inputSearch" type="text" id="search" placeholder="Search" value="" />
            </div>
        </div>
        <table id="table" className="display">
            <thead>
                <tr id="header" className="header">
                    <th id="thAsc" className="sortable asc" id="firstName">First Name</th>
                    <th id="thDesc" className="sortable desc" id="lastName">Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>firstName 1</td>
                    <td>lastName 1</td>
                </tr>
            </tbody>
        </table>
        <div id="tableOptionsBottom" className="tableOptions">
            <div id="showingItems">Showing items 1 to 10 of 43</div>
            <div id="pagination" className="pagination">
                <button id="firstPage">First page</button>
                <button id="previousPage">Previous page</button>
                <button id="currentPage" className="currentPage">1</button>
                <button id="Page" className="">2</button>
                <button id="nextPage">Next page</button>
                <button id="lastPage">Last page</button>
            </div>
        </div>
    </div>
);

export default html;
