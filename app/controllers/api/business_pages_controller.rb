class Api::BusinessPagesController < ApplicationController

    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.find_by(id: params[:id])
        # add reviews
        render :show
    end

    private

    def business_params
        params.require(:business)
    end
end
