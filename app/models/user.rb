class User < ApplicationRecord
    has_one :life_time_score
    has_secure_password
end
