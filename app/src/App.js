import './App.css';
import {MainHeader} from "./components/PageHeader/PageHeader";
import {FilterRow} from "./components/FilterRow/FilterRow";
import {Table} from "./components/Table/Table";


const App = () => {

  return (
      <div className="order-list-wrapper">
          <MainHeader />
          <FilterRow />
          <Table />
      </div>
  );
}

export default App;