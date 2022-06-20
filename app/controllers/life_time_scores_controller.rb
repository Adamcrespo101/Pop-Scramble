class LifeTimeScoresController < ApplicationController
    belongs_to :user

    def update 
        score = LifeTimeScore.find_by(user_id: params[:id])
        if score 
            score.update(score: params[:score])
            render json: score, status: 200
        else
            render json: {error: user doesnt exist}, status: 404
        end
    end

   

end
