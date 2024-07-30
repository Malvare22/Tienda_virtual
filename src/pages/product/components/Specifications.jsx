import { Tabs } from "antd";
import SpecificationsCSS from './Specifications.module.css';

const items = [
    {
      key: '1',
      label: 'Otras Especificaciones',
      children: <h1>Hola</h1>,
    },
    {
      key: '2',
      label: 'Reviews (3)',
      children: 'Content of Tab Pane 2',
    },
  ];

export default function Specifications(){
    return<>
      <Tabs defaultActiveKey="1" items={items} />
    </>;
}