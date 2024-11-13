import React from 'react';
function ListData() {
  debugger;

  function handleSubmit(e)
  {
    e.preventDefault();
  }
    return (
      <div style={styles}>
        <h1>Welcome to my app</h1>
        <form>
          <input type="text" placeholder='First Name'></input>
          <input type="text" placeholder='Last Name'></input>
          <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
        {/* <MyButton /> */}
      </div>
    );
  }

  // function MyButton() {
  //   return (
  //     <button>
  //       I'm a button
  //     </button>
  //   );
  // }
  
  const styles = {
    // form: {
      margin: '70px auto 20px',
    // },
  };
  export default ListData;