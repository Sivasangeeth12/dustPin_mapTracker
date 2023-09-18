import React, { useEffect, useState } from 'react';
import StartFirebase from '../firebase-config-realtime';
import {ref,onValue} from "firebase/database";
import {Table} from "react-bootstrap";

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
      <Table className="w-75  container" bordered striped variant='dark'>
        <thead>
          <tr>
            <th>DustBin No</th>
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
              "lat":row.data.lat,
              "lng":row.data.lng,
              "bio-capacity":row.data.bio.capacity,
              "non-bio-capacity":row.data.nonbio.capacity,
              "e-waste":row.data.ewaste.capacity
            }]
            recordsvalue.push(mapValues);
            return(
            <tr>
              <td>{row.key}</td>
              <td>Bio</td>
              <td>{row.data.bio.capacity}</td>
              <td>Non-Bio</td>
              <td>{row.data.nonbio.capacity}</td>
              <td>E-Waste</td>
              <td>{row.data.ewaste.capacity}</td>
              <td>{row.data.lat}</td>
              <td>{row.data.lng}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
export default recordsvalue;