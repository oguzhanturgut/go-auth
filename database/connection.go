package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"main/models"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:Passw0rd@/go_auth"), &gorm.Config{})

	if err != nil {
		panic("could not connect to database")
	}

	DB = connection

	_ = connection.AutoMigrate(&models.User{})
}
