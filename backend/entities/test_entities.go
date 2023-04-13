package entities

import "gorm.io/plugin/soft_delete"

type Test struct {
	Question  string                `json:"question"`
	Answare1  string                `json:"answare_a"`
	Answare2  string                `json:"answare_b"`
	CreatedAt int64                 `json:"created_at"`
	UpdatedAt int64                 `json:"updated_at"`
	DeletedAt soft_delete.DeletedAt `json:"deleted_at" gorm:"index"`
}
