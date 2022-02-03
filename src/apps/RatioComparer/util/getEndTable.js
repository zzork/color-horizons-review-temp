const getEndTable = (rows) => {
  // this is table where the "each child should have a key" error is coming from
  const endTable = rows.map((row) => (
    <tr key={row.id}>
      <td class={row[10]}>{row[0]}</td>
      <td class={row[10]}>{row[1].toFixed(5)}</td>
      <td class={row[10]}>{row[2]}</td>
      <td class={row[10]}>{row[3].toFixed(5)}</td>
      <td class={row[10]}>{row[4].toFixed(5)}</td>
      <td class={row[11]}>{row[5]}</td>
      <td class={row[11]}>{row[6].toFixed(5)}</td>
      <td class={row[11]}>{row[7]}</td>
      <td class={row[11]}>{row[8].toFixed(5)}</td>
      <td class={row[11]}>{row[9].toFixed(5)}</td>
    </tr>
  ));
  return endTable;
};

export default getEndTable;
