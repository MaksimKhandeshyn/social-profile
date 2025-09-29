import module from "./Statistis.module.css";
export const Statistics = ({ title, stats }) => {
  console.log(module);
  return (
    <section className="statistics">
      {title && <h2 className={module.staticTitle}>{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className={module.item} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
