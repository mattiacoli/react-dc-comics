function Nav({ linksList }) {
  return (
    <nav>
      <ul>
        {linksList.map(link => (
          <li key={link.id}><a href={link.URL}>{link.text}</a></li>
        ))}
      </ul>
    </nav>

  )
}