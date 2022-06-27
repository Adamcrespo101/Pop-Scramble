class User < ApplicationRecord
    has_one :life_time_score
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true 
    validates :username, length: { in: 4..20 }
    validate :nono_words
    
    
    


    def nono_words
        if Obscenity.profane?(:username)
            errors.add(:username, "No No words aren't allowed in your username!")
        end
    end

end
