function reorderLogFiles(logs: string[]): string[] {
  let txt = [], num = [];

  logs
    .map((log) => log.split(" "))
    .forEach(([id, ...log]) =>
      Number.isNaN(+log[0])
        ? txt.push({ id, logs: log.join(" ") })
        : num.push({ id, logs: log.join(" ") })
    );

  txt.sort((a, b) =>
    a.logs == b.logs ? (a.id > b.id ? 1 : -1) : a.logs > b.logs ? 1 : -1
  );

  const mrg = (i) => [i.id, i.logs].join(" ");
  return [...txt.map(mrg), ...num.map(mrg)];
}
