function subdomainVisits(cpdomains: string[]): string[] {
  let map = new Map<string, number>();

  for (let cpd of cpdomains) {
    let [count, domain] = cpd.split(" ");
    const domains = domain.split(".");
    const visits = Number(count);

    while (domains.length) {
      let subdomain = domains.join(".");
      map.set(subdomain, visits + (map.get(subdomain) || 0));
      domains.shift();
    }
  }

  return [...map.entries()].map(([domain, visits]) => `${visits} ${domain}`);
}
