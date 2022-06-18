class WordsController < ApplicationController

    def index 
        render json: Word.all, status: 200
    end

    def show
        word = Word.find_by(id: params[:id])
        render json: word, status: 200
    end


end
