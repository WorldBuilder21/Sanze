import ProtectedRoute from "./utils/router/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./utils/Context/AuthContext";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import HomeScreen from "./screens/home/HomeScreen";

import GetStarted from "./screens/GetStarted";
import PlaySongScreen from "./screens/home/songScreen/PlaySongScreen";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<GetStarted />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home">
            <Route index element={<HomeScreen />} />
            <Route path="playerScreen" element={<PlaySongScreen />} />
            {/* <Route path="playerScreen" element={<PlayerScreen />} /> */}
          </Route>
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
