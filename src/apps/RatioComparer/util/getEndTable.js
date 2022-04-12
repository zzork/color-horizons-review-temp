const getEndTable = (rows) => {
  const endTable = rows.map((row, index) => (
    <tr key={index}>
      <td className={row[10]}>{row[0]}</td>
      <td className={row[10]}>{row[1].toFixed(5)}</td>
      <td className={row[10]}>{row[2]}</td>
      <td className={row[10]}>{row[3].toFixed(5)}</td>
      <td className={row[10]}>{row[4].toFixed(5)}</td>
      <td className={row[11]}>{row[5]}</td>
      <td className={row[11]}>{row[6].toFixed(5)}</td>
      <td className={row[11]}>{row[7]}</td>
      <td className={row[11]}>{row[8].toFixed(5)}</td>
      <td className={row[11]}>{row[9].toFixed(5)}</td>
    </tr>
  ));
  return endTable;
};

export default getEndTable;
