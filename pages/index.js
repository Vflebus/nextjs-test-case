import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Test() {

  const initialTableData = [
    {
      id: 1,
      name: "Ala",
      rank: 6,
      selected: false,
    },
    {
      id: 2,
      name: "Bla",
      rank: 5,
      selected: false,
    },
    {
      id: 3,
      name: "Cla",
      rank: 4,
      selected: false,
    },
    {
      id: 4,
      name: "Dla",
      rank: 3,
      selected: false,
    },
    {
      id: 5,
      name: "Ela",
      rank: 2,
      selected: false,
    },
    {
      id: 6,
      name: "Fla",
      rank: 1,
      selected: false,
    },
  ];
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Ala",
      rank: 6,
      selected: false,
    },
    {
      id: 2,
      name: "Bla",
      rank: 5,
      selected: false,
    },
    {
      id: 3,
      name: "Cla",
      rank: 4,
      selected: false,
    },
    {
      id: 4,
      name: "Dla",
      rank: 3,
      selected: false,
    },
    {
      id: 5,
      name: "Ela",
      rank: 2,
      selected: false,
    },
    {
      id: 6,
      name: "Fla",
      rank: 1,
      selected: false,
    },
  ]);
  const [currentSort, setCurrentSort] = useState("id");
  const [currentSortDir, setCurrentSortDir] = useState("asc");
  const [tableHasBeenModified, setTableHasBeenModified] = useState(false);
  const [sortedTableData, setSortedTableData] = useState([]);
  useEffect(() => {
    console.log('Sorting new...');
    setSortedTableData(tableData.sort((a, b) => {
      let modifier = 1;
      if (currentSortDir === "asc") modifier = -1;
      if (a[currentSort] < b[currentSort]) return -1 * modifier;
      if (a[currentSort] > b[currentSort]) return 1 * modifier;
      return 0;
    }));
    console.log('sorted');
  }, [tableData, currentSort, currentSortDir]);

  let selectedLines = tableData.filter((row) => {
    return row.selected == true;
  }).length;

  //Functions
  const sortBy = (category) => {
    console.log('Changing sort options...')
    //if categrory == current sort, reverse
    if (category === currentSort) {
      setCurrentSortDir(currentSortDir === "asc" ? "desc" : "asc");
    } else {
      setCurrentSort(category);
      setCurrentSortDir("asc");
    }
    console.log('Sorting options changed !')
  };

  const selectRow = (row) => {
    console.log('Selecting row...')
    setTableData(tableData.map((data) => {
      if (data.id == row.id) {
        return { ...data, selected: !data.selected }
      } else {
        return {...data}
      }
    }))
    console.log('Selected !');
  }

  return (
    <div className='column_center tablePage'>
      <div id="notifications">

      </div>
      <h1>Table test case</h1>
      <button className="addRow">Ajouter une ligne à la table</button>
      <table>
        <thead>
          <tr>
            <th><button className={`noButtonStyling ${currentSort == "id" ? `filtering ${currentSortDir}` : ""}`} onClick={() => sortBy("id")}>ID</button></th>
            <th><button className={`noButtonStyling ${currentSort == "name" ? `filtering ${currentSortDir}` : ""}`} onClick={() => sortBy("name")}>name</button></th>
            <th><button className={`noButtonStyling ${currentSort == "rank" ? `filtering ${currentSortDir}` : ""}`} onClick={() => sortBy("rank")}>Rank</button></th>
          </tr>
        </thead>
        <tbody>
          {sortedTableData.map(row => {
            return (
              <tr key={row.id} className={row.selected ? 'selected' : ''} onClick={() => selectRow(row)}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.rank}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {selectedLines > 0 && (
        <button className="deleteButton">
          Supprimer {selectedLines > 1 ? "les " : "la"} ligne séléctionnée{selectedLines > 1 ? "s " : ""}
        </button>
      )}
      {tableHasBeenModified && (
        <div className="changeButtonsDiv">
          <button className="changesButton">Confirmer les changements</button>
          <button className="revertChanges changesButton">Annuler les changements</button>
        </div>
      )}
      <Footer />
    </div >
  )
}
