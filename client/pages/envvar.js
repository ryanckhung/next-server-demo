const Envvar = () => {
  const host = process.env.HOST;
  return (
    <div>
      <div>Environment Variable</div>
      <div>{host}</div>
    </div>
  );
};
export default Envvar;
