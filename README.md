# DB設計

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :messages

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Option|
|------|----|------|
|useer|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: ture|

### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group