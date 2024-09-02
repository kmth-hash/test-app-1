import React, { useEffect, useState } from "react";

function TableUI({ userInput }) {
  const [tblData, setTblData] = useState([]);

  const generateTableData = (inputString) => {
    if (inputString.length<8) 
    {
      setTblData([]);
      return ;
    }
    let ls = inputString.toString().split("-");
    // console.log(ls);

    let colCount = 4 * ls.length;
    // console.log(colCount);

    let finalRes = [];
    let tempRow = [];
    let rowStart = 0;
    let currRowData = [];

    ls.forEach((v) => {
      v.split("").forEach((x) => {
        currRowData.push(x.padStart(2, "0"));
      });
    });

    console.log("Curr data --> " + currRowData);
    for (let r = 0; r < 6; r++) {
      // finalRes.push(currRowData);
      for (let nc = 0; nc < currRowData.length - 1; nc++) {
        // console.log(currRowData[nc].slice(-1),currRowData[nc+1].slice(-1),parseInt(currRowData[nc+1].slice(-1))+parseInt(currRowData[nc].slice(-1)));
        let nodeVal =
          parseInt(currRowData[nc + 1].slice(-1)) +
          parseInt(currRowData[nc].slice(-1));
        tempRow.push(nodeVal.toString());
      }
      // console.log(tempRow);
      finalRes.push(currRowData);
      currRowData = tempRow;
      tempRow = [];
    }
    // Padding * at the beginning and end
    for (let r = 0; r < finalRes.length; r++) {
      if (rowStart == 0) {
        finalRes[r] = [
          ...finalRes[r].map((x) => {
            return { s: 2, v: x };
          }),
        ];
      } else {
        let node = { s: rowStart, v: " " };
        finalRes[r] = [
          node,
          ...finalRes[r].map((x) => {
            return { s: 2, v: x };
          }),
          node,
        ];
      }
      rowStart += 1;
    }
    // console.log(finalRes);
    setTblData(finalRes);
  };

  useEffect(() => {
    
      // console.log(userInput);
      generateTableData(userInput);
    
    // console.log('useEffect')
  }, [userInput]);

  return (
    <div className="container">
      {tblData === null || tblData === undefined || tblData.length==0? (
        <>
        <h6>Invalid Input</h6></>
      ) : (
        <table className="table table-dark table-striped-columns">
          <thead>
            <tr>
              {userInput.split('-').map((x, i) => {
                //   console.log(x);
                return (
                  <th key={i} scope="col" colSpan={4}> 
                    {x}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tblData.map((rowLine, ind) => {
              // console.log(rowLine);
              return (
                <tr key={ind}>
                  {rowLine.map((cells, ind2) => {
                    //   console.log(cells["s"], cells["v"], cells);
                    return (
                      <td key={ind2} colSpan={cells["s"]}>
                        {cells["v"]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableUI;
