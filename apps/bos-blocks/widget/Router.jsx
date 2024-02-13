function Router({ basePath, active, routes, depth, PageNotFound, passProps, children }) {
  if (!depth) depth = 1;
  if (!PageNotFound) PageNotFound = () => <p>404 Not Found</p>;

  let currentRoute = routes[active];

  if (!currentRoute) {
    // Handle 404 or default case for unknown routes
    return <PageNotFound />;
  }

  const src = currentRoute.path;

  // Determine the parameter name based on depth
  let param;
  switch (depth) {
    case 1:
      param = "page";
      break;
    case 2:
      param = "tab";
      break;
    case 3:
      param = "view";
      break;
    default:
      // This should set the src as the new baseUrl, reset the depth
      console.error("Unsupported depth:", depth);
      return <p>Error: Unsupported depth</p>;
  }

  // Construct the currentPath dynamically based on depth
  const currentPath = (a) => `${basePath}${depth === 1 ? "?" : "&"}${param}=${a}`;

  function NavLink({ to, children }) {
    console.log("using custom link", currentPath);
    return <Link to={`${currentPath(to)}`}>{children}</Link>;
  }

  return (
    <div key={active}>
      {children && children({ src, currentPath, depth, NavLink })}
    </div>
  );
}

return { Router };
