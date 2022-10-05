import { useEffect, useState } from 'react'
import Modal from '../components/Modal';

export default function Array() {

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
    setSortedTableData(tableData.sort((a, b) => {
      let modifier = 1;
      if (currentSortDir === "asc") modifier = -1;
      if (a[currentSort] < b[currentSort]) return -1 * modifier;
      if (a[currentSort] > b[currentSort]) return 1 * modifier;
      return 0;
    }));
  }, [tableData, currentSort, currentSortDir]);

  let selectedLines = tableData.filter((row) => {
    return row.selected == true;
  }).length;

  const [isModalOpen, setIsModalOpen] = useState(false);

  //Functions
  const sortBy = (category) => {
    //if categrory == current sort, reverse
    if (category === currentSort) {
      setCurrentSortDir(currentSortDir === "asc" ? "desc" : "asc");
    } else {
      setCurrentSort(category);
      setCurrentSortDir("asc");
    }
  };

  const selectRow = (row) => {
    setTableData(tableData.map((data) => {
      if (data.id == row.id) {
        return { ...data, selected: !data.selected }
      } else {
        return { ...data }
      }
    }))
  }

  const deleteRow = () => {
    setTableData(tableData.filter(row => !row.selected));
    setTableHasBeenModified(true);
  }

  const [currentId, setCurrentId] = useState(7)
  const addRow = () => {
    const newTableData = [...tableData]
    newTableData.push({
      id: currentId,
      name: "---",
      rank: "---",
      selected: false,
    });
    setTableData(newTableData);
    setCurrentId(currentId + 1);
    setTableHasBeenModified(true);
  }

  const updateRows = (array) => {
    setTableData(() => {
      return tableData.map(row => {
        const newRow = array.find(x => x.id == row.id)
        if(newRow){
          return {...newRow, selected: false}
        } else {
          return row
        }
      })
    })
  }

  return (
    <div className='column-center tablePage'>
      <div id="notifications">

      </div>
      <h1>Table test case</h1>
      <button className="addRow" onClick={addRow}>Ajouter une ligne à la table</button>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortBy("id")}><button className={`noButtonStyling ${currentSort == "id" ? `filtering ${currentSortDir}` : ""}`} >ID</button></th>
            <th onClick={() => sortBy("name")}><button className={`noButtonStyling ${currentSort == "name" ? `filtering ${currentSortDir}` : ""}`} >name</button></th>
            <th onClick={() => sortBy("rank")}><button className={`noButtonStyling ${currentSort == "rank" ? `filtering ${currentSortDir}` : ""}`} >Rank</button></th>
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
        <div className="changeButtonsDiv">
          <button className="changesButton" onClick={() => setIsModalOpen(true)} >
            Modifier {selectedLines > 1 ? "les lignes" : "la ligne"} séléctionnée{selectedLines > 1 ? "s " : ""}
          </button>
          <button className="deleteButton" onClick={deleteRow}>
            Supprimer {selectedLines > 1 ? "les lignes" : "la ligne"} ligne séléctionnée{selectedLines > 1 ? "s " : ""}
          </button>
        </div>
      )}
      {tableHasBeenModified && (
        <div className="changeButtonsDiv">
          <button className="changesButton">Confirmer les changements</button>
          <button className="revertChanges changesButton">Annuler les changements</button>
        </div>
      )}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} rowList={tableData.filter((row) => {return row.selected == true;})} updateRows={updateRows}/>
    </div >
  )
}
