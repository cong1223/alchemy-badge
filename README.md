# Alchemy Badge
Alchemy Badge is a customizable badge component for React that allows you to display information in a visually appealing manner. With Alchemy Badge, you can easily create badges with custom text, colors, and icons, making it perfect for displaying user information, status updates, or any other type of data.

Please refer to https://alchemotion.notion.site/Alchemy-Badge-Installation-Steps-1daeaccf15364448a72fae5a061a8945 for more details.

## Installation
To install Alchemy Badge, simply run the following command:

```shell
npm install alchemy-badge
```
## Usage
To use Alchemy Badge in your React project, simply import the component and include it in your JSX code. Here's an example:

```jsx
import React from 'react'
import AlchemyBadge from 'alchemy-badge'

function App() {
  const [alchemyBadge, setAlchemyBadge] = useState<AlchemyBadge>(null)

  useEffect(() => {
    const _alchemyBadge = new AlchemyBadge('xxxxxx')
    setAlchemyBadge(_alchemyBadge)
  }, [])
  
  return (
    <div>
      <a href="#">
        <img
          onClick={alchemyBadge?.logBadgeClick}
          id="badge-button"
          style={{ width: 240, height: 53 }}
          src="https://static.alchemyapi.io/images/marketing/badge.png"
          alt="Alchemy Supercharged"
        />
      </a>
    </div>
  )
}

export default App;
```

## License
Alchemy Badge is MIT licensed.
