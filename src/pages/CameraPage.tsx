import Webcam from '../components/webCam/Webcam'

const CameraPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>사진 촬영</h3>
      <Webcam />
    </div>
  )
}
export default CameraPage;