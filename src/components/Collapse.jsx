import './styles/Collapse.scss';

function Collapse({ children, title }) {
  return (
    <article className="collapse">
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
