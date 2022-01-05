class Api::BusinessPagesController < ApplicationController

    def index
        @businesses = Business.all
        render :index
end
