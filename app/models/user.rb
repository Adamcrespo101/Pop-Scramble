class User < ApplicationRecord
    has_one :life_time_score
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true 
    validates :username, length: { in: 8..20 }
    validates :password, presence: true
    validates :password, length: { in: 8..20 }
end
