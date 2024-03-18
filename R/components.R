liquidDependency <- function() {
  htmltools::htmlDependency(
    name = "liquid",
    version = "0.1.0",
    package = "liquid",
    src = "www",
    script = "liquid.js"
  )
}

component <- function(name) {
  function(...) {
    shiny.react::reactElement(
      module = "@emdgroup-liquid/liquid",
      name = name,
      props = shiny.react::asProps(...),
      deps = liquidDependency()
    )
  }
}

input <- function(name, defaultValue) {
  function(inputId, ..., value = defaultValue)
  {
    shiny.react::reactElement(
      module = "@liquid",
      name = name,
      props = shiny.react::asProps(inputId = inputId, ..., value = value),
      deps = liquidDependency()
    )
  }
}

#' @export
LdOption <- component("LdOption")

#' @export
LdSelect.shinyInput <- input("LdSelect", NULL)

#' @export
LdSelect <- component("LdSelect")

#' @export
LdButton <- component("LdButton")

#' @export
LdLoading <- component("LdLoading")
