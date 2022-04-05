import React from 'react'

const TableCom = (props) => {
  const {tabledata}=props;
  return (
    <table className="table-auto">
  <thead className={"bg-blue-200"}>
    <tr>
      <th>NO</th>
      <th>Nama Faskes</th>
      <th>Kategory</th>
      <th>Total Vaksin 1</th>
      <th>Total Vaksin 2</th>
      <th>Total Vaksin 3</th>
    </tr>
  </thead>
  <tbody>
{tabledata.map((val,index)=>(
  <tr>
      <td>{index + 1}</td>
      <td>{val.nama}</td>
      <td>{val.kelas_rs? val.kelas_rs :"belum"}</td>
     {
       val.detail.map((val,index)=>(
         <td>{val.batch}</td>
       ))
     }

    </tr>
))}
    
  </tbody>
</table>
  )
}

export default TableCom