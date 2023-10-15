import React, { useEffect, useState } from 'react';
import StartFirebase from '../firebase-config-realtime';
import {ref,onValue} from "firebase/database";
import {Col, Container, Row, Table} from "react-bootstrap";
import Navigationbar from './pages/NavigationBar';
import Googlemap from './Googlemap';

const db=StartFirebase();
let recordsvalue=[[]];

export class Realtimedata extends React.Component{
  constructor()
  {
    super();
    this.state={
      tableData:[]
    }
  }
  componentDidMount()
  {
    const dbref=ref(db,'bin');
    onValue(dbref,(snapshot)=>
    {
      let records=[];
      snapshot.forEach(childSnapshot=>
        {
          let keyname=childSnapshot.key;
          let data=childSnapshot.val();
          records.push({"key":keyname,"data":data})
        });
        this.setState({tableData:records})
    })
  }
  render()
  {
    return(
      <>
      <Navigationbar/>
      <div className="table-responsive mt-3">
      <Table className="w-75  container" bordered striped variant='dark' >
        <thead >
          <tr >
            <th >DustBin No</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map((row,index)=>
          {
            const mapValues=[{
              "lat":row.data.Latitude,
              "lng":row.data.Longitude,
              "bio-capacity":row.data.Biodegradable.Capacity,
              "non-bio-capacity":row.data.NonBiodegradable.Capacity,
              "e-waste":row.data.EWaste.Capacity
            }]
            recordsvalue.push(mapValues);
            return(
            <tr>
              <td>{row.key}</td>
              <td>Bio</td>
              <td>{row.data.Biodegradable.Capacity}</td>
              <td>Non-Bio</td>
              <td>{row.data.NonBiodegradable.Capacity}</td>
              <td>E-Waste</td>
              <td>{row.data.EWaste.Capacity}</td>
              <td>{row.data.Latitude}</td>
              <td>{row.data.Longitude}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
      </div>
      <Googlemap/>
      {/* <Container className="d-inline-flex">
      <Row>
        <Col lg={4}><img src='https://file.removal.ai/preview/0826e205-8269-4af2-aa55-1b230a29a8fe-mapicon.png' height={50}width={50}></img></Col>
        <Col lg={4}>{<Googlemap/>}</Col>
        <Col lg={4}><img src='https://file.removal.ai/preview/0826e205-8269-4af2-aa55-1b230a29a8fe-mapicon.png'height={10}width={10} ></img></Col>
      </Row>
      </Container> */}
      </>
    )
  }
}
export default recordsvalue;