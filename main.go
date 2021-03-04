package main

import (
	"github.com/gofiber/fiber/v2"
	"main/database"
	"main/routes"
)

func main() {
	database.Connect()

	app := fiber.New()

	routes.Setup(app)

	_ = app.Listen(":8000")
}
