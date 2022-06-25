class User < ApplicationRecord
    has_one :life_time_score
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true 
    validates :username, length: { in: 8..20 }
    validate :nono_words
    
    validates :password, presence: true
    validates :password, length: { in: 8..20 }


    def nono_words
        if Obscenity.profane?(:username)
            errors.add(:username, "No No words aren't allowed in your username!")
        end
    end

end
