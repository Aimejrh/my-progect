import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatientRecords } from '../../store/slice/patientRecordsSlice';

const PatientRecordsComponent = ({ patientId }) => {
  const dispatch = useDispatch();
  const patientRecords = useSelector(state => state.patientRecords.records);
  const status = useSelector(state => state.patientRecords.status);
  const error = useSelector(state => state.patientRecords.error);

  useEffect(() => {
    dispatch(fetchPatientRecords(patientId));
  }, [dispatch, patientId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Медицинские записи пациента {patientId}</h2>
      <ul>
        {patientRecords.map(record => (
          <li key={record.id}>
            <h3>{record.diagnosis}</h3>
            <p>{record.prescription}</p>
            <p>{record.notes}</p>
            <p>{record.recommendation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecordsComponent;
