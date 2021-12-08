import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import '../styles/NewspapersList.css'

function NewspapersList() {
  const newspaperItems = useSelector((state) => state.newspaper.items);


  return (
    <div className="newspapersList" data-testid='newspapersList'>
      {newspaperItems.map((item, key) => {
        return (
          <Card title={item.title_normal.toUpperCase()} bordered={false} className='itemCard' key={key}>
            <p><strong>Publisher: </strong> {item.publisher}</p>
            <p><strong>Published between: </strong>{item.start_year} - {item.end_year}</p>
            <p><strong>Note: </strong> {item.note[0]}</p>
          </Card>
        );
      })}
    </div>
  );
}

export default NewspapersList;
