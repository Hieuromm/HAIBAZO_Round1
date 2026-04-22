export const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' },
  header: { fontWeight: 'bold', marginBottom: '20px' },
  controls: { marginBottom: '15px' },
  row: { display: 'flex', alignItems: 'center', marginBottom: '8px', gap: '10px' },
  input: { width: '80px', padding: '5px', fontSize: '16px' },
  buttonGroup: { display: 'flex', gap: '10px', marginBottom: '20px' },
  btnRestart: { padding: '8px 24px', cursor: 'pointer', fontWeight: 'bold' },
  btnAuto: { padding: '8px 24px', cursor: 'pointer', backgroundColor: '#e0e0e0', border: '1px solid #ccc', fontWeight: 'bold' },
  btnAutoActive: { padding: '8px 24px', cursor: 'pointer', backgroundColor: '#90ee90', border: '1px solid green', fontWeight: 'bold' },
  board: { 
    width: '100%', height: '400px', border: '2px solid black', 
    position: 'relative', overflow: 'hidden' 
  },
  circle: { 
    position: 'absolute', width: '40px', height: '40px', 
    borderRadius: '50%', border: '2px solid black', 
    display: 'flex', justifyContent: 'center', alignItems: 'center', 
    backgroundColor: 'white', cursor: 'pointer', fontWeight: 'bold', 
    transition: 'opacity 1s ease-out', 
    transform: 'translate(-50%, -50%)',
    userSelect: 'none' 
  },
};