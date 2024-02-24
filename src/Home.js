
import React from 'react';
import './styles.css';

export const Home = () => {
    return (
      <div className="grid-container">
        <div className="grid">
          {items.map(item => (
            <div key={item.id} className="grid-item">
              {item.name}
            </div>
          ))}
        </div>
        <table className="table">
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Grid;
  