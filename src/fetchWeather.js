export const fetchData = async (cityName) => {
    return await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric `)
    .then(res => res.json())
  }