class WordsController < ApplicationController

    def index 
        render json: Word.all, status: 200
    end

end
