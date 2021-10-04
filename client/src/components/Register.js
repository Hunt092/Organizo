import React from 'react';

const appStyle = {
  height: '360px',
  display: 'flex'
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#E3E2DF',
  width: '300px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px',
  border: '1px solid #bfbfbf',
  borderRadius: '12px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '18px 6px 0 0',
  padding: '8px 10px',
  border: '1px solid #b81132',
  borderRadius: '3px',
  background: '#ca216a',
  width: '100%',
  fontSize: '15px',
  cursor: 'pointer',
  color: '#ffffff',
  display: 'block'
};

const registerSytle = {
  margin:'12px 0 0 0',
  fontSize: '16px'
}

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle} >{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    onSubmit(data);
  };
  return (
    
    <form style={formStyle} onSubmit={handleSubmit} >
      <h3 style={{marginLeft:'110px'}}>Register</h3>
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <Field ref={passwordRef} label="Confirm Password:" type="password" />
      <div>
        <button style={submitStyle} type="submit">Register</button>
      </div>
    </form>
  );
};

// Usage example:

const App = () => {
  const handleSubmit = data => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  return (
    <div style={appStyle}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;