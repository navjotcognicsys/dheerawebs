import React,{useEffect} from 'react'
import {Card,Button} from 'react-bootstrap';
import { useCSVDownloader } from 'react-papaparse';

export default function FilteredData(props) {

  const { CSVDownloader, Type } = useCSVDownloader();

  useEffect(() => {
    console.log(props.fileName)
  
    return () => {
      
    }
  }, [])
  

  return (
    <Card>
      <Card.Header>
        <h4>Filtered Data</h4>
        <CSVDownloader
          className="btn btn-success"
          filename={`FILTERED_${props.fileName}` ?? 'csv_data'}
          bom={true}
          config={{
            delimiter: ',',
          }}
          data={props.data}
        >
          Download CSV file
        </CSVDownloader>
      </Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>Registered</Card.Title>
        <Card.Text>
          <div className='info-circle'>
            {props.totalReg}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
