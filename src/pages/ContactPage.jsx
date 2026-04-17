export default function ContactPage() {
  const cards = [
    {
      title: 'Finland',
      img: 'https://russagency.ru/upload/Image/catalog/big/19508-1.jpg',
      desc: 'Finland is a country in Northern Europe, bordering Sweden, Norway, and Russia.',
      link: 'https://www.nettivene.com',
      linkText: 'Yachts in Finland',
    },
    {
      title: 'Portugal',
      img: `${import.meta.env.BASE_URL}portugal.jpg`,
      desc: 'Portugal is the westernmost country in continental Europe.',
      link: 'https://www.yachtall.com/ru/parusnye-lodki/portugaliya',
      linkText: 'Yachts in Portugal',
    },
    {
      title: 'Bulgaria',
      img: 'https://zagranportal.ru/wp-content/uploads/2024/01/551929513a4ff.webp',
      desc: 'Bulgaria is a country in southeastern Europe on the Black Sea.',
      link: 'https://dailyboats.com/ru/boats-for-sale/type-sail/region-europe/country-bulgaria',
      linkText: 'Yachts in Bulgaria',
    },
  ]
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Locations</h2>
      <div className="row g-4 justify-content-center">
        {cards.map((c) => (
          <div key={c.title} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={c.img}
                className="card-img-top"
                alt={c.title}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10%',
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{c.title}</h5>
                <hr />
                <p className="card-text text-muted">
                  <em>
                    <strong>{c.title} is</strong>
                  </em>{' '}
                  {c.desc.split(' is ')[1]}
                </p>
                <hr />
                <h6>Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href={c.link} target="_blank" rel="noreferrer">
                      {c.linkText}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
