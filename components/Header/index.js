//menu desplegable en dispositivos pequeños
import { Popover } from "@headlessui/react";
//maneja temas claro/oscuro con next-themes
import { useTheme } from "next-themes";
//permite cambiar rutas dinamicamente con next.js 
import { useRouter } from "next/router";
//manejar el estado local y efectos secundarios (como montar el componente)
import React, { useEffect, useState } from "react";
//componente personalizado para los botones 
import Button from "../Button";
// Local Data: Archivo local de configuracion 
import data from "../../data/portfolio.json";


//Props: propiedades o params que hereda un componente hijo para personalizar su contenido: 
//- handleWorkScroll: Función que desplaza la página a la sección "Work".
//- handleAboutScroll: Función que desplaza la página a la sección "About".
//- isBlog: Booleano que indica si el encabezado está en una página de blog.
const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll, handleServicesScroll, isBlog }) => {
  // variables internas:
  // Router: para cambiar entre rutas(ir a /blog)
  const router = useRouter();
  // Controlan el estado del tema claro/oscuro
  const { theme, setTheme } = useTheme();
  // Asegura que el componente solo interactue con el DOM despues de montarse 
  const [mounted, setMounted] = useState(false);
  // Extraídos del archivo JSON, definen el nombre del portafolio y qué secciones deben mostrarse.
  const { name, showBlog, showResume } = data;

  // Este efecto asegura que el componente está montado antes de interactuar con el DOM, especialmente necesario para usar theme correctamente.
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    //encabezado movil:
    // - Popover: Muestra el menú desplegable en dispositivos pequeños.
    // - open: variable que determina si el menu está abierto 
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            {/* Opciones de menu: botones para las secciones Work, about, blog.
                Usa los valores de data para decidir que mostrar */}
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button onClick={handleContactScroll}>Contact</Button>
                  <Button onClick={handleServicesScroll}>Services</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      {/* Encabezado para pantallas grandes */}
      {/* Sticky Header: El encabezado se mantiene fijo en la parte superior de la pantalla. */}
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name} 
        </h1>{/*aquest name no m'agrada massa, podria ser un logo */}
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleContactScroll}>Contact</Button>
            <Button onClick={handleServicesScroll}>Services</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
