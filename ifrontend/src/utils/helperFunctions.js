export const onInputChange = (e, setInputState) => {
    const {id, value} = e.target;
    setInputState(prev => ({...prev, [id] : value}))
  };