const Marker = ({
  children,
  searchString,
}: {
  children: string;
  searchString: string;
}) => {
  const lowerChildren = children.toLocaleLowerCase();
  const lowerSearch = searchString.toLocaleLowerCase();
  if (searchString.length === 0 || !lowerChildren.includes(lowerSearch)) {
    return <>{children}</>;
  }

  const index = children
    .toLocaleLowerCase()
    .indexOf(searchString.toLocaleLowerCase());

  const start = children.slice(0, index);
  const middle = children.slice(index, index + searchString.length);
  const end = children.slice(index + searchString.length);

  return (
    <>
      {start}
      <mark className="bg-orange text-white" data-testid="mark">
        {middle}
      </mark>
      {end}
    </>
  );
};

export default Marker;
