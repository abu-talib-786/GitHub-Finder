import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";
import { GithubProvider } from "./Context/github/GitHubContext";
import { AlertProvider } from "./Context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen bg-neutral">
            <Routes>
              <Route
                path="*"
                element={
                  <>
                    <Navbar />

                    <main className="container mx-auto px-3 pb-12 bg-neutral">
                      <Alert />
                      <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/About" element={<About />}></Route>
                        <Route path="/User/:login" element={<User />}></Route>
                        <Route path="/notfound" element={<NotFound />}></Route>
                        <Route path="/*" element={<NotFound />}></Route>
                      </Routes>
                    </main>

                    <Footer />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
