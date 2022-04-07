import './styles/Collapse.scss';

function Collapse({ children, title, medium }) {
  return (
    <article className={'collapse ' + (medium ? 'collapse-medium' : '')}>
      <div className="collapse-title isClosed" onClick={toggleCollapse}>
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </article>
  );

  function toggleCollapse(e) {
    e.target.classList.toggle('isClosed');
  }
}

export default Collapse;
