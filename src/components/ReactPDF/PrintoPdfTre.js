import { Button } from "antd";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Table } from "antd";
import "./print.css";
class ComponentToPrint extends React.Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
      },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <td>
                <div class="header-space"> </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>
                  <div class="content">{item?.name}</div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div class="footer-space"> </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="header">handlePrint</div>
        <div class="footer">footer</div>
      </React.Fragment>
      // <body style={{}}>
      //   <div class="page-footer">I'm The Footer</div>

      //   <Table columns={columns} dataSource={data} pagination={false} />
      // </body>
    );
  }
}

const Example = () => {
  const printRef = useRef();
  const pageStyle = `
  @page { 
    size: auto;  margin: 0mm ; } @media print { body { -webkit-print-color-adjust: exact; } }
  @media print {
    div.page-footer {
    position: fixed;
    bottom:0mm;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #fff;
    /* For testing */
    background: red; 
    opacity: 0.5;
    
    page-break-after: always;
    }
    .page-number:before {
      /* counter-increment: page; */
      content: "Pagina "counter(page);
    }


  }
  body {
    marginBottom:50px
  }
  `;

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    removeAfterPrint: true,
    copyStyles: true,
    // pageStyle: pageStyle
  });

  return (
    <div>
      <Button onClick={handlePrint} style={{ marginTop: "200px" }}>
        print
      </Button>
      <ComponentToPrint ref={printRef} />
    </div>
  );
};

export default Example;
