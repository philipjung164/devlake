package ticket

import "time"

type Board struct {
	Id          string `gorm:"primaryKey"`
	Name        string
	Description string
	Url         string
	CreatedDate time.Time
}

type BoardIssue struct {
	BoardId string `gorm:"primaryKey"`
	IssueId string `gorm:"primaryKey"`
}

type BoardSprint struct {
	BoardId  string `gorm:"primaryKey"`
	SprintId string `gorm:"primaryKey"`
}
