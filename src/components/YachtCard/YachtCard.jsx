import './YachtCard.css'
export default function YachtCard({ title, image, description, links, trainingLink, searchLink, searchText }) {
  return (
    <div className="col">
      <article className="yacht-card">
        <img src={image} className="yacht-card__image" alt={title} />
        <div className="yacht-card__body">
          <h6 className="yacht-card__title">{title}</h6><hr />
          <p className="yacht-card__text"><em><strong>{title} is</strong></em> {description}</p><hr />
          <h6>Links</h6>
          <ul type="square">{links.map((l, i) => (<li key={i}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>))}</ul><hr />
          <h6 className="yacht-card__training">Yachting training</h6>
          <a href={trainingLink} target="_blank" rel="noopener noreferrer" className="d-block mb-2 text-break">{trainingLink}</a>
          <a href={searchLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{searchText}</a>
        </div>
      </article>
    </div>
  )
}